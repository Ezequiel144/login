import Icons from "./Icons";

export default function Login(){
    return(
        <section className='relative rounded-xl p-3 w-fill my-56 shadow-2xl bg-white'>
        <header>
          <h1 className='font-mono text-lg font-semibold space-x-10'>Logo</h1>
        </header>
        <main className='flex'>
          <article className='px-10'>
            <h1 className='text-center py-1 text-3xl text-emerald-500 font-semibold'>Sing in to Logo</h1>
            <Icons />
            <h3 className='text-center text-gray-400'>our user your email acount</h3>
            <from className='flex flex-col w-56 m-auto py-3'>
              <div className=' flex-col justify-center w-full h-fill'>
                <input className='bg-gray-200 p-1 w-full mb-3' type='email' placeholder='e-mail'/>
                <input className='bg-gray-200 p-1 w-full' type='password' placeholder='password'/>
              </div>
              <h3 className='text-center py-5 decoration-black underline'>forgot your password?</h3>
              <button type='submit'className='py-2 px-10 rounded-2xl bg-emerald-500 text-white m-auto hover:bg-emerald-600'>SING IN</button>
            </from>
          </article>
          <article className='w-72'></article>
          {/* <article className='p-3 w-1/2 z-10 flex-col justify-center items-center text-xl bg-yellow-500'>
            <h1 className='text-white'>Hello Friend</h1>
            <p>Entre your present details and start journey with us</p>
          </article> */}
          <div className='w-2/5 absolute rounded-r-xl bg-emerald-400 h-full top-0 right-0 grid grid-cols-1 grid-rows-2 py-24'>
            <h1 className='w-fit m-auto text-white text-2xl font-semibold'>Hello, Friend</h1>
            <p className='w-fit text-white text-center'>Entre your present details and start journey with us</p>
            <button className='text-white border-2 w-36 py-2 m-auto rounded-2xl uppercase hover:bg-white hover:text-emerald-400 hover:border-0 hover:py-2.5'>Sing up</button>
          </div>
        </main>
      </section>
    )
}