""" Elaborar un algoritmo que permita ingresar el número de partidos ganados, perdidos y empatados, por algún equipo en el torneo apertura, se debe de mostrar su puntaje total, teniendo en cuenta que por cada partido ganado obtendrá 3 puntos, empatado 1 punto y perdido 0 puntos. """

""" 
Puntaje total = pt
Número de partidos ganados = pg
Número de partidos empatados = pe
Número de partidos perdidos = pp
puntaje de partidos ganados = ppg
puntaje de partidos empatados = ppe
"""
pg = int(input("Ingrese el número de partidos ganados: "))
pe = int(input("Ingrese el número de partidos empatados: "))
pp = int(input("Ingrese el número de partidos perdidos: "))
ppg = pg * 3
ppe = pe * 1
pt = ppg + ppe
print(f"El puntaje total es: {pt} puntos")