import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
  return {'time': time.time()}


@app.route('/test')

@app.route('/test')
def classify_air_quality(model, features, scaler=None):

 
  if scaler is not None:
    features = scaler.transform(features)

  
  predictions = model.predict(features)


  air_quality = []
  for pred in predictions:
    if pred == 0:
      air_quality.append("good")
    elif pred == 1:
      air_quality.append("moderate")
    else:
      air_quality.append("bad")

  return air_quality

@app.route('/test')
