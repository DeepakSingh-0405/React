import { use } from "react";

export default function Card({username = 'lorem' , description = 'No description'}){
    // console.log(username)
    // console.log(description)
    return (
        <>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?_gl=1*uojw51*_ga*MTY3MzEzMjg0OS4xNzQ5MDE4NjY3*_ga_8JE65Q40S6*czE3NTE0NDU2NjckbzMkZzEkdDE3NTE0NDU3OTMkajYwJGwwJGgw"
          alt="photo"
          className="object-cover object-center w-full rounded-t-md h-72 "
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>
      </div>
        </>
    )
}