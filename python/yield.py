# def squares():
#     for i in range(5):
#         yield i

# g = squares()

# print(next(g))
# print(next(g))
# print(next(g))
# print(next(g))
# print(next(g))


def testYield(i):
    print("inside yield")
    yield i * 2

for i in range(5):
    print("printing inside the for loop {}".format(i))
    
    g = testYield(i)
    
    print(next(g))
    