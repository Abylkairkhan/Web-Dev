from cmath import sqrt

a = int(input())
b = int(input())

for x in [i * i for i in range(b) if a <= i * i <= b]:
    print(x)
