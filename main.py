import tkinter as tk
from tkinter import messagebox

def calculate_bmi():
    try:
        weight = float(weight_entry.get())
        feet = int(feet_entry.get())
        inches = int(inch_entry.get())
        total_inches = feet * 12 + inches
        height_m = total_inches * 0.0254
        bmi = weight / (height_m ** 2)
        bmi = round(bmi, 2)

        if bmi < 18.5:
            status = "Underweight"
            color = "#7FDBFF"
        elif 18.5 <= bmi < 24.9:
            status = "Normal weight"
            color = "#2ECC40"
        elif 25 <= bmi < 29.9:
            status = "Overweight"
            color = "#FFDC00"
        else:
            status = "Obese"
            color = "#FF4136"

        result_label.config(text=f"BMI: {bmi}\nStatus: {status}", bg=color)
    except Exception:
        messagebox.showerror("Input Error", "Please enter valid numbers.")

root = tk.Tk()
root.title("Colorful BMI Calculator")
root.geometry("350x300")
root.configure(bg="#222238")

title = tk.Label(root, text="BMI Calculator", font=("Arial", 18, "bold"),
                 bg="#222238", fg="#F2E9E4")
title.pack(pady=10)

frame = tk.Frame(root, bg="#222238")
frame.pack(pady=10)

# Weight
tk.Label(frame, text="Weight (kg):", font=("Arial", 12),
         bg="#222238", fg="#F2E9E4").grid(row=0, column=0, padx=5, pady=5, sticky="e")
weight_entry = tk.Entry(frame, font=("Arial", 12),
                        bg="#4A4E69", fg="#F2E9E4", insertbackground="#F2E9E4")
weight_entry.grid(row=0, column=1, padx=5, pady=5)

# Height Feet
tk.Label(frame, text="Height:", font=("Arial", 12),
         bg="#222238", fg="#F2E9E4").grid(row=1, column=0, padx=5, pady=5, sticky="e")
feet_entry = tk.Entry(frame, width=5, font=("Arial", 12),
                      bg="#4A4E69", fg="#F2E9E4", insertbackground="#F2E9E4")
feet_entry.grid(row=1, column=1, padx=(5, 0), pady=5, sticky="w")
tk.Label(frame, text="ft", font=("Arial", 12),
         bg="#222238", fg="#F2E9E4").grid(row=1, column=1, padx=(50, 0), sticky="w")

# Height Inches
inch_entry = tk.Entry(frame, width=5, font=("Arial", 12),
                      bg="#4A4E69", fg="#F2E9E4", insertbackground="#F2E9E4")
inch_entry.grid(row=1, column=1, padx=(90, 0), pady=5, sticky="w")
tk.Label(frame, text="in", font=("Arial", 12),
         bg="#222238", fg="#F2E9E4").grid(row=1, column=1, padx=(130, 0), sticky="w")

# Calculate Button
calc_btn = tk.Button(root, text="Calculate BMI", font=("Arial", 12, "bold"),
                     bg="#99AC98", fg="#222238",
                     activebackground="#99ADA7", activeforeground="#222238",
                     command=calculate_bmi)
calc_btn.pack(pady=10)

# Result Label
result_label = tk.Label(root, text="", font=("Arial", 14, "bold"),
                        bg="#222238", fg="#F2E9E4")
result_label.pack(pady=10, fill="both", expand=True)

root.mainloop()
