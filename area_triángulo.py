""" Elabore un algoritmo que lea los 3 lados de un triángulo cualquiera y calcule su área, considerar: Si A, B y C son los lados, y S el semiperímetro. """

""" 
Área del triángulo = at
longitud del lado A = la
longitud del lado B = lb
longitud del lado C = lc
longitud del semiperímetro = ls
"""

la = int(input("Ingrese la longitud del lado A: "))
lb = int(input("Ingrese la longitud del lado B: "))
lc = int(input("Ingrese la longitud del lado C: "))
ls = (la + lb + lc) / 2
at = (ls * (ls - la) * (ls - lb) * (ls - lc)) ** 0.5
print(f"El área del triángulo es: {at}")