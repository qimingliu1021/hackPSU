import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
  return {'time': time.time()}


@app.route('/test')
def plot_data_by_column_g(data_file, column_g, column_d, column_e):
 

  
   data = pd.read_excel(data_file)

  
   grouped_data = data.groupby(column_e)

   fig, axes = plt.subplots(nrows=len(grouped_data), figsize=(12, 8))  
  
   for idx, (category, group_data) in enumerate(grouped_data):
    
     g_data = group_data[column_g].tolist()
     e_data = group_data[column_e].tolist()

    
     axes[idx].plot(e_data, g_data, marker='o', linestyle='-')
     axes[idx].set_title(f"Category: {category}")
     axes[idx].set_xlabel(column_e)
     axes[idx].set_ylabel(column_g)
     axes[idx].grid(True)


   fig.suptitle(f"Plots of {column_g} for different categories in {column_e}")
   plt.tight_layout()

 
   plt.show()

@app.route('/test')
  
filtered_data = data[data["column_e"] > 2018]                                   
def search_data():
    search_term = search_var.get().lower()
    matching_data = filtered_data[
        (filtered_data["column_b"].str.lower().contains(search_term))
        | (filtered_data["column_c"].str.lower().contains(search_term))
    ]

    if matching_data.empty:
        result_label.config(text="No matching results found.")
    else:
        result_label.config(text=f"Value (column_g): {matching_data.iloc[0]['column_g']}")
        plot_data_by_column_g("dataset.xlsx", column_g, column_e)


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
@app.route('/test')
@app.route('/test')
@app.route('/test')
@app.route('/test')
@app.route('/test')


