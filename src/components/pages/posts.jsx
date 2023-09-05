import moment from "moment/moment"
import { useEffect } from "react"
import { useState } from "react"
import { UseAuthContext } from "../utils/UseAuthContex"
import { UseIsLoading } from "../utils/UseIsLoading"


const Posts = () => {

    const [posts, setPosts] = useState("")
    const [message, setMessage] = useState(null)
    const [text, setText] = useState("")
    const { user } = UseAuthContext()
    const { isLoading, setIsLoading } = UseIsLoading()
    const [initPost, setInitPosts] = useState("")


    const fetchData = async () => {
        setIsLoading(true)
        const res = await fetch("https://bbquotes-1a8y.onrender.com/api/post")
        const json = await res.json()
        if (res.ok) {
            setPosts(json)
            setInitPosts(json)
            setIsLoading(false)
        }
        if (!res.ok) {
            setMessage(json.error)
            setIsLoading(true)
        }
    }

    const handlePost = async () => {
        if (!user || user === null) {
            setMessage("Login to save quotes!!")
            return
        }


        const res = await fetch("https://bbquotes-1a8y.onrender.com/api/post", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${user.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: text })
        })
        const json = await res.json()

        if (res.ok) {
            setMessage("You Posted a new subject!")
            await fetchData()
            setText("")
        }

        if (!res.ok) {
            setMessage(json.error)
        }

    }

    const handleDelete = async (id) => {
        const res = await fetch("https://bbquotes-1a8y.onrender.com/api/post/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
        })
        const json = await res.json()

        if (res.ok) {
            await fetchData()
            setMessage(json.message)
        }

        if (!res.ok) {
            setMessage(json.error)
        }
    }


    const handleSearch = (e) => {
        if (!e.target.value || e.target.value == "") {
            return setPosts(initPost), setMessage(null)

        }

        const resultsArray = posts
            .filter(post =>
                post.text.toLowerCase().includes(e.target.value.toLowerCase())
                || post.author.name.toLowerCase().includes(e.target.value.toLowerCase()))



        setPosts(resultsArray)
        if (posts === [] || posts.length < 1) setMessage("Nothing Found")
    }



    useEffect(() => { fetchData() }, [])









    return (<>
        <form >
            <label htmlFor="">Search: </label>
            <input
                type="text"
                className='form-control mb-4'
                onChange={handleSearch}
            />


        </form>



        <h1>Posts</h1>

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Say Something....</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => { setText(e.target.value) }} value={text}></textarea>
            <button className="btn btn-success mt-1" id="textBody" onClick={() => { handlePost() }}>Submit</button>
        </div>



        {message &&
            <div className="alert alert-success" role="alert" id="cardBody" onClick={() => setMessage("")}>
                <span id="textBody"> {message} </span>
            </div>
        }

        {isLoading === true && <div className=" d-flex justify-content-center text-center mb-3"> <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div> </div>}
        {posts &&
            posts.map((post) => {
                return (

                    <div key={post._id}>
                        <div className="d-flex justify-content-center">
                            <div className="card w-75 mb-3 postBody">
                                <div className="card-body postBody">
                                    <h5 className="card-title bold" id="green">By {post.author.name}</h5>
                                    <p className="card-text " id="green">{post.text}</p>
                                    <small id="grey">{moment(post.createdAt).fromNow()}</small>
                                    {user && post.author.email == user.email &&
                                        <button className="btn" id="green" onClick={() => (handleDelete(post._id))}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                            </svg>
                                        </button>
                                    }

                                </div>
                            </div>

                        </div>
                    </div>
                )

            })

        }


    </>


    )

}

export default Posts