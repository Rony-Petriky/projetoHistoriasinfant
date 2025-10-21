export default function (){
        return (
          <div className = "bg-gray-100 flex items-center justify-center min-h-screen p-4">
          
              <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8 space-y-6">
          
                  <div className="flex justify-center space-x-4 border-b border-gray-200 pb-4">
                      <h1 className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-600 pb-1">Login</h1>
                      <a href="#cadastro" className="text-2xl font-semibold text-gray-500 hover:text-gray-700 pb-1">Cadastro</a>
                  </div>
          
                  <form id="login-form" className="space-y-4">
                      
                      <h2 className="text-lg font-medium text-center text-gray-700">Acesse sua conta</h2>
          
                      <button type="button" className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out">
                          <svg className="w-4 h-4 fill-current google-icon-svg mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.59l4.59-4.59C34.02 5.03 29.21 3 24 3 15.16 3 7.6 6.13 3.96 11.23l5.6 4.38C11.53 12.87 17.15 9.5 24 9.5z"/>
                              <path fill="#4285F4" d="M44.5 24c0-1.57-.13-3.08-.36-4.59H24v8.32h11.66c-.66 3.48-2.67 6.37-5.75 8.35l5.6 4.38C43.23 38.31 48 31.95 48 24c0-2.36-.31-4.63-.88-6.75H24v4.38h20.5z"/>
                              <path fill="#FBBC05" d="M12.55 26.54c-.23-.68-.35-1.42-.35-2.25s.12-1.57.35-2.25V17.02H6.95C6.18 18.52 5.8 20.2 5.8 22c0 1.8.38 3.48 1.15 4.98l5.6 4.38c-.76-1.39-1.2-2.98-1.2-4.69z"/>
                              <path fill="#34A853" d="M24 44c5.16 0 9.77-1.7 13.03-4.58l-5.6-4.38c-3.08 2.37-7.69 3.59-13.03 3.59-6.85 0-12.47-3.37-14.44-8.75l-5.6 4.38C7.6 41.87 15.16 45 24 45z"/>
                          </svg>
                          Continuar com Google
                      </button>
          
                      <div className="flex items-center justify-center">
                          <div className="h-px bg-gray-200 flex-grow"></div>
                          <span className="px-3 text-sm text-gray-500">ou</span>
                          <div className="h-px bg-gray-200 flex-grow"></div>
                      </div>
                      
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                      </div>
          
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Senha</label>
                          <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                      </div>
          
                      <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                          Entrar
                      </button>
                      
                      <p className="text-center text-sm text-gray-600">
                          Não tem conta? 
                          <a href="#cadastro" className="font-medium text-indigo-600 hover:text-indigo-500">Cadastre-se</a>
                      </p>
                  </form>
          
                  <form id="cadastro-form" className="space-y-4 hidden"> 
                      
                      <h2 className="text-lg font-medium text-center text-gray-700">Crie sua conta</h2>
          
                      <button type="button" className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition duration-150 ease-in-out">
                          <svg className="google-icon-svg mr-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.59l4.59-4.59C34.02 5.03 29.21 3 24 3 15.16 3 7.6 6.13 3.96 11.23l5.6 4.38C11.53 12.87 17.15 9.5 24 9.5z"/>
                              <path fill="#4285F4" d="M44.5 24c0-1.57-.13-3.08-.36-4.59H24v8.32h11.66c-.66 3.48-2.67 6.37-5.75 8.35l5.6 4.38C43.23 38.31 48 31.95 48 24c0-2.36-.31-4.63-.88-6.75H24v4.38h20.5z"/>
                              <path fill="#FBBC05" d="M12.55 26.54c-.23-.68-.35-1.42-.35-2.25s.12-1.57.35-2.25V17.02H6.95C6.18 18.52 5.8 20.2 5.8 22c0 1.8.38 3.48 1.15 4.98l5.6 4.38c-.76-1.39-1.2-2.98-1.2-4.69z"/>
                              <path fill="#34A853" d="M24 44c5.16 0 9.77-1.7 13.03-4.58l-5.6-4.38c-3.08 2.37-7.69 3.59-13.03 3.59-6.85 0-12.47-3.37-14.44-8.75l-5.6 4.38C7.6 41.87 15.16 45 24 45z"/>
                          </svg>
                          Cadastrar com Google
                      </button>
          
                      <div className="flex items-center justify-center">
                          <div className="h-px bg-gray-200 flex-grow"></div>
                          <span className="px-3 text-sm text-gray-500">ou</span>
                          <div className="h-px bg-gray-200 flex-grow"></div>
                      </div>
                      
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Nome</label>
                          <input type="text" id="name-reg" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                      </div>
          
                      <div>
                          <label className="block text-sm font-medium text-gray-700">Email</label>
                          <input type="email" id="email-reg" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                      </div>
          
                      <div>
                          <label  className="block text-sm font-medium text-gray-700">Senha</label>
                          <input type="password"  name="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                      </div>
          
                      <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                          Cadastrar
                      </button>
                      
                      <p className="text-center text-sm text-gray-600">
                          Já tem conta? 
                          <a href="#login" className="font-medium text-indigo-600 hover:text-indigo-500">Entrar</a>
                      </p>
                  </form>
          
              </div>
        </div>
        );
      }
