import { FormEvent, useContext, useState } from "react"
import { authContext } from "@/contexts/authContext"
import Link from "next/link"
import Head from "next/head"
import { toast } from "react-toastify"

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useContext(authContext)

  function handleCreateUserButton(e: FormEvent) {
    e.preventDefault()

    if(name == "" || email == "" || password == "") {
      return toast.error("Preencha todos os campos")
    }

    let data = { name, email, password }
    signUp(data)
  }

  return (
    <>
      <Head>
        <title>Cadastro de usuário</title>
      </Head>

      <section className="flex flex-col md:flex-row h-screen items-center">

        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="https://source.unsplash.com/random" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-0 md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">

          <div className="w-full h-100">

            <h1 className="text-gray-700 text-xl md:text-2xl font-bold leading-tight mt-12">Crie sua conta!</h1>

            <form className="mt-6" action="#" method="POST">

              <div>
                <label className="block text-gray-700">Nome</label>
                <input type="text" name="name" id="" placeholder="Nome" onChange={(e) => setName(e.target.value)} className="text-gray-700 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus autoComplete="" required />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="text-gray-700 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoComplete="" required />
              </div>

              <div className="flex justify-between">
                <div className="mt-4 flex-1 mr-10">
                  <label className="block text-gray-700">Senha</label>
                  <input type="password" name="password" placeholder="********" onChange={(e) => setPassword(e.target.value)} minLength={6} className="text-gray-700 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                </div>

                <div className="mt-4 flex-1">
                  <label className="block text-gray-700">Confirmar Senha</label>
                  <input type="password" name="password_confirmation" id="" placeholder="********" minLength={6} className="text-gray-700 w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                </div>
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                  Esqueceu a senha?
                </a>
              </div>

              <button onClick={(e) => handleCreateUserButton(e)} className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                Criar conta
              </button>
            </form>

            {/* <hr className="my-6 border-gray-300 w-full" /> */}

            {/* <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                <div className="flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlinkHref="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
                    <span className="ml-4">
                        Log in with Google
                    </span>
                </div>
        </button> */}

            <p className="mt-8 text-gray-500">Já tem uma conta? <Link href="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
              Entrar</Link>
            </p>
          </div>
        </div>

      </section>
    </>

  )
}