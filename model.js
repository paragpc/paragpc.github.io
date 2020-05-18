/*
load the model
*/
async function start() {
    //load the model
    model = await tf.loadLayersModel('model_tf/model.json')

    console.log("Model loaded!")
}
