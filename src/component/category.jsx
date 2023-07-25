import { Fragment, useState } from "react"
import "./category.css"

const Category = ({sendQuestion}) => {
    const [dataset, setDataSet] = useState([])
    const [isDataset, isSetDataSet] = useState(false)

    const handleGkQ = () => {
        fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple").then(response => response.json())
            .then(data => {
                setDataSet(data.results)
                sendQuestion(data.results)
            }).catch(error => {
                console.log(error);
            })
    }

    
    const handleHistory = () => {
        fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple").then(response => response.json())
            .then(data => {
                setDataSet(data.results)
                sendQuestion(data.results)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleSports = () => {
        fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple").then(response => response.json())
            .then(data => {
                setDataSet(data.results)
                 sendQuestion(data.results)
            }).catch(error => {
                console.log(error);
            })
    }

    const handleMaths = () => {
        fetch("https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple").then(response => response.json())
            .then(data => {
                setDataSet(data.results)
                 sendQuestion(data.results)
            }).catch(error => {
                console.log(error);
            })
    }


// console.log(dataset);
    return (
        <Fragment>
            <center>
                <div className="row ">
                    <div className="col-sm-4 card categoryCard mx-4" style={{ maxWidth: "18rem" }} >
                        Gernal knowledge
                        <button
                            className="startButton"
                            onClick={handleGkQ}>start</button>
                    </div>
                    <div className="col-sm-4 card categoryCard mx-4" style={{ maxWidth: "18rem" }} >
                        History
                        <button
                            className="startButton"
                            onClick={handleHistory}>start</button>
                    </div>
                    <div className="col-sm-4 card categoryCard mx-4" style={{ maxWidth: "18rem" }} >
                        Sports
                        <button
                            className="startButton"
                            onClick={handleSports}>start</button>
                    </div>
                    <div className="col-sm-4 card categoryCard mx-4" style={{ maxWidth: "18rem" }} >
                        Methamatic
                        <button
                            className="startButton"
                            onClick={handleMaths}>start</button>
                    </div>
                </div>
            </center>
        </Fragment>
    )
}


export default Category