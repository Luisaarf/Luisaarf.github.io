import { csharp, unity, graphql , typescript, postman, react, htmlcss, python, godot} from "../../../assets/technologies/iconhandler";
import './Technologies.css';

const Technologies = () => {

    return(
        <view className="technologyIcons">
            <span><img src={csharp} /></span>
            <span><img src={unity} /></span>
            <span><img src={graphql} /></span>
            <span><img src={typescript} /></span>
            <span><img src={postman} /></span>
            <span><img src={react} /></span>
            <span><img src={htmlcss} /></span>
            <span><img src={python} /></span>
            <span><img src={godot} /></span>
        </view>
    )
}

export default Technologies;