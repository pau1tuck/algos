# This is a staircase of size n = 4:

#    #
#   ##
#  ###
# ####

# Write a function that takes parameter n and prints a right-aligned staircase of size n. */


def staircase(n):
    array = [" " for i in range(n)]  # Python loops from zero to n - 1!
    for j in range(n):
        array[n - 1 - j] = "#"
        print(str.join("", array))
