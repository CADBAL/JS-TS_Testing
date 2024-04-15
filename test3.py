def sum(a, b):
    return a + b

nums = [5, 15]
#print(sum(*nums))  # Unpacking list into function arguments


data = (100, 200, 300, 400, 500)
first, *middle, last = data

print(middle)


def get_position():
    return 10, 20  # Returns a tuple

x, y = get_position()  # Unpacking the tuple


print(x)
print(y)