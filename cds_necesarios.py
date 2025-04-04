""" Elaborar un algoritmo que permita calcularel número de CDs necesarios para hacer una copia de seguridad, de la información almaacenada en un disco cuya capacidad se conoce. Considerar que el disco duro está lleno de información además expresado en Gigabyte. Un CD virgen tiene 700 Megabytes de capacidad y un Gigabyte es igual a 1024 megabites """

""" 
Número de CDs = cd
Número de Gigabytes del disco duro = gb
Número de Megabytes del disco duro = mg
"""

from math import trunc # Importar la función TRUNC para redondear hacia abajo

gb = float(input("Ingrese el número de Gigabytes del disco duro: "))
mg = gb * 1024
cd = trunc(mg / 700 + 1)
print(f"El número de CDs necesarios para hacer una copia de seguridad es: {cd}")
