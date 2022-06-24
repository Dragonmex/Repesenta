import { Button, Checkbox } from "@material-tailwind/react"
import  logo_Login  from '../../src/assets/logo_Login.png'


export function PageLogin() {
  return (
    <div className="py-0 md:py-0 bg-coolGray-400">
      <div className="container  mx:auto">
        <div className="max-w-sm mx-auto py-1 px-5">
          <div className="mb-6 text-center">
          <img className="inline rounded-3xl mr-1" src={logo_Login} alt="Adicionar" />
          </div>
          <form >
            <div className="mb-6">
              <label 
                className="block mb-2 text-grey-700 font-medium" 
                for data-config-id="auto-txt-8-1" 
                htmlFor=""
                >
                  Email
                </label>
                <input 
                  className="
                    appearance-none 
                    block w-full p-3 
                    leading-5 text-coolGray-900 
                    border border-coolGray-200 
                    rounded-lg shadow-md 
                    placeholder-orange-200
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-orange-600
                    focus:ring-opacity-50" 
                  type="
                    Email" 
                  placeholder="nome@email.com"  
                  />
            </div>
            <div className="mb-4">
              <label 
                className="block mb-2 text-grey-700 font-medium"
                for data-config-id="auto-txt-9-1"
                htmlFor=""
                >
                Senha
                </label>
                <input 
                  className="
                    appearance-none 
                    block w-full p-3 
                    leading-5 text-coolGray-900 
                    border border-coolGray-200 
                    rounded-lg shadow-md 
                    placeholder-orange-200
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-orange-600
                    focus:ring-opacity-50" 
                  type="password" 
                  placeholder="**********"  
                />
            </div>
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="w-full md:w-1/2">
                <label
                  className="relative inline-flex items-center"
                  htmlFor="#"
                  >
                    <input 
                      className="form-checkbox appearance-none"
                      type="checkbox"/>
                    <Checkbox  color="orange" defaultValue={undefined} />
                    <span 
                      className="ml-1 mr-15 text-xs text-grey-600 font-medium font-popins" 
                      data-config-id= "auto-txt-3-1"
                    >
                    Lembrar senha  
                    </span>
                  </label>
              </div>
              <div className="w-full md:w-auto mt-1">
                <a 
                  className="
                    inline-block 
                    font-popins
                    text-xs 
                    font-medium 
                    text-orange-500 
                    hover:text-orange-600" 
                  href="#"
                  data-config-id="auto-txt-4-1"
                  >
                    Esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mb-6 text-center">
              <Button className="
                block w-full 
                py-4
                leading-5
                bg-laranja
                font-roboto
                font-normal
                ">
                <h1 className="text-lg">Entrar</h1>
              </Button>
            </div>
            <div className="text-center">
              <span className="text-xs font-medium">
              Não tem uma conta?
              </span>
              <a className="
                  mx-2
                  inline-block 
                  text-xs 
                  font-medium 
                  text-orange-500 
                  hover:text-orange-600 
                  hover:underline" 
                 href="#"
              >
                Cadastre-se
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

