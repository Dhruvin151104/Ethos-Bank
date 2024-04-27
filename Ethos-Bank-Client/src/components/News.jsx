import React from "react"
import { useState, useEffect } from "react"
import noIMG from "../assets/newsUnavailable.jpg"
import Spinner from "./Spinner"
import axios from "axios"

function News() {
  const [news, setnews] = useState({
    articles: [],
    cardNumber: 1,
    isLoading: true,
    status: null,
  })
  const card = (props) => {
    const handleError = (e)=>{
      e.target.src=noIMG
    }
    return (
      <div
        key={props.key}
        className="h-full min-w-[33.333%] flex justify-center items-center"
      >
        <div className="h-[98%] w-[75%] mx-auto rounded-3xl overflow-hidden bg-sky-50 shadow-inner outline outline-[3px] outline-sky-500">
          <div className="h-[45%] w-full">
            <img
              src={props.urlImg}
              alt="Image"
              onError={handleError}
              className=" object-fill h-full w-full"
            />
          </div>
          <div className="h-[45%] w-full py-2 px-5 overflow-hidden flex flex-col items-center gap-2">
            <p className=" text-base font-medium">{props.title}</p>
            <p className="text-sm font-light line-clamp-4">{props.description}</p>
          </div>
          <div className="h-[15%] w-full px-5 text-md font-medium py-2">
            <a
              href={props.url}
              target="_blank"
              className=" hover:text-sky-600 duration-200 ease-linear"
            >
              Read More &rarr;
            </a>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_NEWS_API)
        console.log(response)
        console.log(import.meta.env.VITE_NEWS_API)
        if (response.data.status=="ok") {
          const data = response.data
          setnews({
            ...news,
            articles: data.articles,
            isLoading: false,
            status: data.status,
          })
        } else {
          setnews({ ...news, isLoading: false,status: "error" })
        }
      } catch (error) {
        setnews({ ...news, isLoading: false,status: "error" }) 
      }
    }

    fetchData()
  }, [])

  const nextNews = () => {
    const parent = document.getElementById("cardContainer")
    parent.style.transform = `translateX(-${33.333 * news.cardNumber}%)`
    setnews({ ...news, cardNumber: news.cardNumber + 1 })
  }

  const prevNews = () => {
    const parent = document.getElementById("cardContainer")
    parent.style.transform = `translateX(-${33.333 * (news.cardNumber - 2)}%)`
    setnews({ ...news, cardNumber: news.cardNumber - 1 })
  }

  return (
    <div className="w-full h-[70%] relative overflow-hidden flex justify-center items-center">
      {news.isLoading && <Spinner />}
      {!news.isLoading && news.status === "error" && (
        <p className="text-3xl font-semibold text-gray-400">
          {/* No News is Available For Now! */}
          {import.meta.env.VITE_NEWS_API}
        </p>
      )}
      {!news.isLoading && news.status === "ok" && (
        <div className="w-full h-full bg-transparent flex justify-between text-5xl font-light text-black absolute">
          <div className="h-full w-[2%] flex items-center justify-center relative z-10">
            <button
              className={`${
                news.cardNumber === 1
                  ? "text-slate-500 cursor-not-allowed"
                  : "hover:text-blue-600 "
              }`}
              onClick={prevNews}
              disabled={news.cardNumber === 1}
            >
              &lt;
            </button>
          </div>
          <div className="h-full w-[2%] flex items-center justify-center relative z-10">
            <button
              className={`${
                news.cardNumber >= news.articles.length - 2
                  ? "text-slate-500 cursor-not-allowed"
                  : "hover:text-blue-600 "
              }`}
              onClick={nextNews}
              disabled={news.cardNumber >= news.articles.length - 2}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
      {!news.isLoading && news.status === "ok" && (
        <div
          id="cardContainer"
          className="w-full h-full flex items-center justify-between relative duration-[400ms] ease-linear"
        >
          {news.articles.map((e, index) =>
            card({
              key: index,
              title: e.title ? e.title : "",
              description: e.description ? e.description : "",
              urlImg: e.urlToImage ? e.urlToImage : noIMG,
              url: e.url ? e.url : "",
            })
          )}
        </div>
      )}
    </div>
  )
}

export default News
