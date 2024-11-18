import { Heart } from 'lucide-react'

export default function Selecionar() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full transform transition duration-500 hover:scale-105">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-red-800 mb-4">
            A importância do <br /> coração
          </h1>
          <div className="h-1 w-24 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col items-center space-y-6 mb-10">
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <p className="text-xl font-semibold text-gray-800">FELIPE FERNANDES</p>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <p className="text-xl font-semibold text-gray-800">MÁRIO CÉSAR DE OLIVEIRA NETO</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            O coração é um órgão vital que bombeia sangue por todo o corpo, fornecendo oxigênio e nutrientes essenciais.
          </p>
        </div>
      </div>
    </div>
  )
}