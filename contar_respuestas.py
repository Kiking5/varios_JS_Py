""" Elaborar un algoritmo que solicite el número de respuestas correctas y en blanco, correspondientes a postulantes y muestre su puntaje final considerando que por cada respuesta correcta tendrá 4puntos, respuestas incorrectas tendra -1 y respuesta en blanco tendrá 0. """

""" 
Puntaje final = pf
Número de respuestas correctas = rc
Número de respuestas incorrectas = ri
Número de respuestas en blanco = rb
Puntaje de reespuesta correctas = prc
Puntaje de respuestas incorrectas = pri
"""

rc = int(input("Ingrese el número de respuestas correctas: "))
ri = int(input("Ingrese el número de respuestas incorrectas: "))
rb = int(input("Ingrese el número de respuestas en blanco: "))
prc = rc * 4
pri = ri * -1
pf = prc + pri
print(f"El puntaje final es: {pf} puntos")
