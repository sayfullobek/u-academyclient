import {Forms} from "../../../component/Forms";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {EmbeddedGet} from "../../../service/connectService/AppService";
import {APP_API} from "../../../service/Api";
import {toast} from "react-toastify";
import axios from "axios";
import {BASE_URL} from "../../../service/BaseUrl";
import {IS_STATUS} from "../../../utils/Util";
import {Loading} from "../../../component/Loading";

export const AddVideoLessonsByModuleAndCourse = () => {
    const navigate = useNavigate()
    const id = useParams().id
    const [course, setCourse] = useState({})
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState('')
    const [moduleId, setModuleId] = useState('')
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
    const arr = [
        {
            name: "Modulni tanlang",
            placeholder: 'Modulni tanlang',
            type: 'select',
            value: moduleId,
            setValue: setModuleId,
            arr: course.modules
        }, {
            name: "Darsning nomi",
            placeholder: 'Darsning nomini kiriting',
            type: 'text',
            value: name,
            setValue: setName
        }
    ]
    const saveLesson = async () => {
        if (name.trim().length === 0) {
            return toast.error('Darsning nomi bo\'sh bo\'lmasin')
        }
        if (moduleId === "0") {
            return toast.error("Modulni tanlash shart")
        }
        try {
            const res = await axios.post(BASE_URL + APP_API.lesson + "?userId=" + localStorage.getItem("__id__") + "&courseId=" + id + "&moduleId=" + moduleId + "&videoName=" + name + "&videoId=" + localStorage.getItem("lesson_video_id"))
            if (IS_STATUS(res.status)) {
                toast.success(res.data.body)
                navigate("/auth/dashboard/course/" + id)
            }
        } catch (err) {
            toast.error(err.message)
        }
    }

    return (
        <div>
            {loading ? (
                <Forms name={course.name + " kursiga darslik qo'shish"} status={""} functions={saveLesson} inputs={arr}
                       link={"/auth/dashboard/course/" + id}/>
            ) : (
                <Loading/>
            )}
        </div>
    )
}