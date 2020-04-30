import React, {Component} from "react"


class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "", 
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const {memes} = res.data
                console.log(memes[0])
                this.setState({allMemeImgs: memes})
            })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    {
                        /**
                         * Create 2 input fields, one for the topText and one for the bottomText
                         * Remember that these will be "controlled forms", so make sure to add
                         * all the attributes you'll need for that to work
                         */
                        
                    }
                    <button>Gen</button>
                </form>
            </div>
        )
    }
}


export default MemeGenerator