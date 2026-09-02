import { Route, Routes } from "react-router-dom"
import FloatingShape from "./components/FloatingShape"


function App() {


  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden">

      <FloatingShape 
      color="bg-pink-100" size="w-64 h-64" top="-5%" left="10%" delay={0}
      />
      <FloatingShape 
      color="bg-pink-100" size="w-48 h-48" top="-5%" left="80%" delay={5}
      />
      <FloatingShape 
      color="bg-pink-100" size="w-32 h-32" top="-5%" left="-10%" delay={2}
      />

    <Routes>
      <Route path="/" element={"Home"} />
      <Route path="/signup" element={"<SignUpPage />"} />
      <Route path="/login" element={"<loginPage />"} />
    </Routes>

    </div>
  )
}

export default App
