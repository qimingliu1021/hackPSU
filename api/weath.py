import pandas as pd
import tkinter as tk
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

data = pd.read_excel("dataset.xlsx")
column_a=df["Column A"]
column_b=df["Column  B"]
column_c=df["Column C"]
column_d=df["Column D"]
column_e=df["Column E"]
column_g=df["Column G"]
column_h=df["Column H"]

print(data.columns)

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


def analyze_air_quality(air_quality_value):
 
  if air_quality_value <= 50:
     print("Air quality: Good")
   elif air_quality_value <= 100:
     print("Air quality: Moderate")
   else:
     print("Air quality: Bad")

  



def get_picture_choice():
 
 while True:
    choice = input("Choose what kind of place are you looking for your plantation: ")
  try:
      choice = int(choice)
      if 1 <= choice <= 4:
         return choice
      else:
         print("Invalid choice. Please enter 1, 2, 3, or 4.")
      except ValueError:
       print("Invalid input. Please enter a number.")

# def choice():
#     if choice == 1:
#         print(" **Improve Ventilation:**")
#         print("Do you want to get more precise help?")
#         signup= input(signup(username, password,email))
#         print("place type = house")
#         area_sq_meters= input("enter area of the place in square meters :")
#         n_trees=(0.60*area_sq_meters)//5
#         if air_quality_value <= 50:
#             n_trees=n_trees//2
#             return n_trees
#         elif air_quality_value <= 100:
#             n_trees=n_trees*1.5
#             return n_trees
#         else:
#             return n_trees
        
#     if choice == 2:
#         print(" **Improve Ventilation:**")
#         print("Do you want to get more precise help?")
#         signup= input(signup(username, password,email))
#         print("place type = apartment")
#         area_sq_meters= input("enter area of the place in square meters :")
#         n_plants=(0.30*area_sq_meters)//1.5
#         if air_quality_value <= 50:
#             n_plants=n_plants//2
#             return n_plants
#         elif air_quality_value <= 100:
#             n_plants=n_plants*2
#             return n_plants
#         else:
#             return n_plants

#     if choice == 3:
#         print(" **Improve Ventilation:**")
#         print("Do you want to get more precise help?")
#         signup= input(signup(username, password,email))
#         print("place type = office")
#         area_sq_meters= input("enter area of the place in square meters :")
#         n_plants=(0.75*area_sq_meters)//2
#         if air_quality_value <= 50:
#             n_plants=n_plants//2
#             return n_plants
#         elif air_quality_value <= 100:
#             n_plants=n_plants*3
#             return n_plants
#         else:
#             return n_plants

     

                    

# def signup(username, password, email):
  

#   print(f"Username: {username}")
#   print(f"Password: {password}")  
#   print(f"Email: {email}")  

#   print("Signup successful!")

# #example
# username = "johndoe"
# password = "secret123"
# email = "johndoe@example.com"

# signup(username, password, email)

# class Plant:
 

#   def __init__(self, place_type, area_sq_meters):
   
#     self.place_type = place_type
#     self.area_sq_meters = area_sq_meters

#   def suitable_plant_types(self, category):
    
#     suggestions = []
#     if category == "green plants":
#       if self.place_type == "house":
#         suggestions = ["Snake Plant", "Spider Plant", "Fiddle Leaf Fig"]
#       elif self.place_type == "apartment":
#         suggestions = ["ZZ Plant", "Pothos", "Air Plants"]
#     elif category == "flowers":
#       suggestions = ["Peace Lily", "African Violets", "Orchid"]
#     elif category == "produce":
#       if self.place_type == "house" and self.area_sq_meters > 50:
#         suggestions = ["Cherry Tomato", "Peppers", "Dwarf Herbs"]
#       else:
#         suggestions = ["Mint", "Chives", "Microgreens"]
#     return suggestions

#   def suggest_big_trees(self):
   
#     if self.place_type == "house" and self.area_sq_meters > 100:
#       return ["Rubber Tree", "Ficus Benjamina", "Monstera Deliciosa"]
#     else:
#       return []

#   def suggest_big_plants(self):
   
#     if self.place_type == "house" and self.area_sq_meters > 50:
#       return self.suitable_plant_types("green plants")[:2]  
#     else:
#       return []

#   def suggest_small_plants(self):
   
#     return self.suitable_plant_types("green plants")[2:]

# def main():
  
#   place_type = input("Enter place type (house/apartment/office/study space: ")
#   area_sq_meters = float(input("Enter area of the place (square meters): "))

#   plant = Plant(place_type, area_sq_meters)

#   print("** Big Trees (suitable for houses with >100 sqm): **")
#   big_trees = plant.suggest_big_trees()
#   if big_trees:
#     for tree in big_trees:
#       print(tree)
#   else:
#     print("Sorry, big trees are not suitable for this place.")

#   print("\n** Big Plants (suitable for houses with >50 sqm): **")
#   big_plants = plant.suggest_big_plants()
#   if big_plants:
#     for plant in big_plants:
#       print(plant)
#   else:
#     print("Sorry, big plants are not suitable for this place.")

#   print("\n** Small Plants (suitable for any place): **")
#   small_plants = plant.suggest_small_plants()
#   for plant in small_plants:
#     print(plant)

# if __name__ == "__main__":
#   main()



    

# data = read_and_preprocess_data("air_quality_data.xlsx")
# web_app()


# root = tk.Tk()
# root.title("Air Quality Search")

    
# search_var = tk.StringVar()
# search_entry = tk.Entry(root, textvariable=search_var, width=30)
# search_entry.pack()

   
# search_button = tk.Button(root, text="Search", command=search_data)
# search_button.pack()

   
# result_label = tk.Label(root, text="", font=("Arial", 12))
# result_label.pack()

aqi=search_data()
classify_air_quality(aqi)
analyze_air_quality(aqi)

