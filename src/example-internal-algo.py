# Define the list of intervals
intervals = [(4, 5), (0, 2), (2, 7), (1, 3), (0, 4)]

# Sort the intervals based on their finish times
intervals.sort(key=lambda x: x[1])

# Initialize the list to hold the selected intervals
selected_intervals = []

# Initialize the end time of the last added interval to 0
last_finish_time = 0

# Iterate over the sorted intervals
for start, finish in intervals:
    # If the start time of the current interval is greater or equal
    # to the finish time of the last selected interval, add it to the list
    if start >= last_finish_time:
        selected_intervals.append((start, finish))
        last_finish_time = finish

# Print the selected intervals
print("Selected intervals:", selected_intervals)
