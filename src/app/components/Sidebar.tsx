import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6 ">
          <nav className="space-y-5">

            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>
          <nav className='mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> This is Henrique & Juliano</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Modao</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'> Viva la vida</a>

          </nav>
        </aside>
    )
}