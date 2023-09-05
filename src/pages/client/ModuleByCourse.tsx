import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../service/connectService/AppService";
import {APP_API} from "../../service/Api";
import {Loading} from "../../component/Loading";

export const ModuleByCourse = () => {
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)
    const id = useParams().id
    const [videos, setVideos] = useState([])
    const [oneVideo, setOneVideo] = useState({})
    const getOneCourse = async () => {
        try {
            const res = await EmbeddedGet(APP_API.course + "/" + id, "data")
            setCourse(res)
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getOneCourse()
    }, [])

    const getModule = async (modId) => {
        try {
            const mod = await EmbeddedGet(APP_API.module + "/" + modId, "data")
            setVideos(mod.videos)
        } catch (err) {
        }
    }
    console.log(oneVideo)
    return (
        <div>
            {loading ? (
                <div className={"d-flex p-3 align-items-center justify-content-center"}>
                    <div className="list-group list-group-light"
                         style={{width: '300px', position: 'absolute', top: '60px', left: '60px'}}>
                        <div className="accordion" id="accordionExample">
                            {course.modules.map((item, i) => (
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button onClick={() => getModule(item.id)} className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={"#" + item.moduleName} aria-expanded="true"
                                                aria-controls={item.moduleName}>
                                            {item.moduleName}
                                        </button>
                                    </h2>
                                    <div id={item.moduleName} className="accordion-collapse collapse"
                                         data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="list-group list-group-light">
                                                {videos ? (
                                                    videos.length === 0 ? (
                                                        <>hozircha darsliklar mavjud emas</>
                                                    ) : (
                                                        videos.map(video => (
                                                            <button
                                                                className={video === oneVideo ? "list-group-item list-group-item-action px-3 border-0 bg-success text-light" : "list-group-item list-group-item-action px-3 border-0"}
                                                                aria-current="true" onClick={() => setOneVideo(video)}>
                                                                {video.videoName}
                                                            </button>
                                                        ))
                                                    )
                                                ) : (<></>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {videos.length === 0 ? (
                        <></>
                    ) : (
                        <div className={"card w-50 mt-5 p-5"}>
                            <h1 className={"text-center text-success"}>{oneVideo.videoName}</h1>
                            <video width={"100%"} controls={true} src={APP_API.downloadPhoto + oneVideo.videoId}>
                                <source src={APP_API.downloadPhoto + oneVideo.videoId}/>
                            </video>
                        </div>
                    )}
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    )
}