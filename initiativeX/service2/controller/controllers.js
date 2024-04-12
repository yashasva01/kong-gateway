const feature1 = async (req, res) => {
    console.log("feature 1")
    res.send("This is feature 1. From service 2.")
}

const feature2 = async (req, res) => {
    console.log("feature 2")
    res.send("This is feature 2. From service 2.")
}


module.exports = {
    feature1,
    feature2
}