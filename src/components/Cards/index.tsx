import { useContext, useEffect, useState } from "react";
import { Card } from "../Card";
import { api } from "@/services/api";
import { authContext } from "@/contexts/authContext";
import computerImage from '@/../public/computer-fail.png'
import Image from "next/image";

interface IPostProps {
  id: string
  title: string
  subtitle: string
  description: string
  post_image: string
  user_id: string
}

const Cards = () => {

  const [posts, setPosts] = useState([])
  const [filterMyPosts, setFilterMyPosts] = useState(false)
  const [isReverse, setIsReverse] = useState(false)

  const { user } = useContext(authContext)

  const queryParams = new URLSearchParams()

  async function getPosts() {
    await api.get(`/posts?${queryParams.toString()}`).then((response) => {
      setPosts(response.data)
    })
      .catch((err) => console.log(err))
  }

  function reversePosts() {
    queryParams.append('is_reverse', 'true')
  }

  function showOnlyCurrentUserPosts() {
    if (user?.id) queryParams.append('user_id', user.id)
  }

  useEffect(() => {

    if (isReverse) reversePosts()

    if (filterMyPosts) showOnlyCurrentUserPosts()

    getPosts()

  }, [filterMyPosts, isReverse])

  return (
    <>
      <ul className="flex flex-col min-h-screen items-start justify-start w-full ">

        <div className="flex items-center justify-center gap-10 w-full text-black mb-5 ">

          <strong className="text-gray-700">Mostrar</strong>

          <select name="cars" id="cars" onChange={(e) => setFilterMyPosts(Boolean(e.target.value))} className="mt-1.5 border-gray-300 text-gray-700 sm:text-sm text-center px-3">
            <option value="">Todos os Posts</option>
            <option value="true">Meus Posts</option>
          </select>

          <select name="cars" id="cars" onChange={(e) => setIsReverse(Boolean(e.target.value))} className="mt-1.5 border-gray-300 text-gray-700 sm:text-sm text-center px-3">
            <option value="">Mais recentes</option>
            <option value="true">Mais antigos</option>
          </select>

        </div>

        {!!posts.length ? (posts.map((post: IPostProps) => {
          return(
            <li className="mt-6" key={post.id}>
              <Card
                id={post.id}
                postImage={post.post_image}
                title={post.title}
                subtitle={post.subtitle}
                user_id={post.user_id}>
              </Card>
            </li>
          )})
        ) : (
          <li className=" mt-10 mx-auto text-center">
            <strong className="text-gray-700">Sem posts até o momento</strong>
            <Image src={computerImage} alt="imagem de um computador triste" className="w-52 p-5"/>
          </li>
          
        )}
      </ul>
    </>
  )
}

export { Cards }