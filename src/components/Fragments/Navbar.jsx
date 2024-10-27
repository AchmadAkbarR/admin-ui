import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-defaultBlack text-special-bg2 w-36 h-screen px-7 py-12 flex flex-col justify-between">
  <div>
    <div className="flex justify-center mb-10">Logo</div>
    <div className="flex bg-primary text-white px-4 py-3 rounded-md">
      <div className="text-white mx-auto sm:mx">A</div>
      <div className="ms-3 hidden sm:block">MENU</div>
    </div>
    <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
      <div className="mx-auto sm:mx">B</div>
      <div className="ms-3 hidden sm:block">MENU</div>
    </div>
    <div className="flex hover:bg-special-bg3 px-4 py-3 rounded-md">
      <div className="mx-auto sm:mx">C</div>
      <div className="ms-3 hidden sm:block">MENU</div>
    </div>
  </div>
  <div>
    <div className="flex bg-special-bg3 px-4 py-3 rounded-md">
      <div className="mx-auto sm:mx">D</div>
      <div className="ms-3 hidden sm:block">Logout</div>
    </div>
    <div className="border-b my-10 border-b-special-bg"></div>
    <div className="flex justify-between">
      <div className="mx-auto sm:mx">foto</div>
      <div className="hidden sm:block">
        Username
        <br />
        View Profile
      </div>
      <div className="hidden">icon</div>
    </div>
  </div>
</nav>
  )
}

export default Navbar