""" Se tiene los puntoa A (abcisa) y B(ordenada) en el cuadrante positivo del plano cartesiano, elabore el algoritmo que permite obtener la distancia entre los puntos A y B """

""" 
Distancia = d
Abcisa de A = aa
Abcisa de B = ab
Ordenada de A = oa
Ordenada de B = ob
"""

aa = float(input("Ingrese la abcisa del punto A: "))
ab = float(input("Ingrese la abcisa del punto B: "))
oa = float(input("Ingrese la ordenada del punto A: "))
ob = float(input("Ingrese la ordenada del punto B: "))
d = ((ab - aa) ** 2 + (ob - oa) ** 2) ** 0.5
print(f"La distancia entre los puntos A y B es: {d:.2f}")