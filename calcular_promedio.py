""" Se necesita obtener el promedio simple de un estudiante a partir de sus tres notas parciales """

""" 
promedio = P
primera nota parcial = n1
segunda nota parcial = n2
tercera nota parcial = n3
"""

n1 = float(input("Ingrese la primera nota parcial: "))
n2 = float(input("Ingrese la segunda nota parcial: "))
n3 = float(input("Ingrese la tercera nota parcial: "))
p = (n1 + n2 + n3) / 3
print(f"El promedio es {p:.2f}")