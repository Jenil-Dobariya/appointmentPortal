const hello = (req, res) => {
    res.status(200).json({messag: "Hello World!"})
}

module.exports = {hello}