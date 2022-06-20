
const uploadFile = (req, res) => {
    if (!res.body) {
        console.log(req.body);
        res.send(req.body);
    }
}

module.exports = { uploadFile };