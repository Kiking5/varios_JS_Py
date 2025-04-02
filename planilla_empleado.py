""" Se requiere el algoritmo para elaborar la plantilla de un empleado. Para ello se dispone de sus horas laborales en el mes, así como de la tarifa por hora. """

""" 
Planilla = p
Número de horas laboradas en el mes = hl
Tarifa por hora = th
"""

hl = int(input("Ingrese el número de horas laboradas en el mes: "))
th = int(input("Ingrese la tarifa por hora: "))
p = hl * th
print(f"El monto a pagar es: {p}")