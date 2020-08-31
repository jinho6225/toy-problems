def spiral_copy(inputMatrix):
  
	top_row = 0
	bottom_row = len(inputMatrix)-1
	left_col = 0
	right_col = len(inputMatrix[0])-1
	lst = []
	
	while top_row <= bottom_row and left_col <= right_col:
		for i in range(left_col, right_col+1):
			lst.append(inputMatrix[top_row][i])
		top_row += 1
		
		for i in range(top_row, bottom_row+1):
			lst.append(inputMatrix[i][right_col])
		right_col -= 1
		
		if top_row <= bottom_row:
			for i in reversed(range(left_col, right_col+1)):
				lst.append(inputMatrix[bottom_row][i])
			bottom_row -= 1
		
		if left_col <= left_col:
			for i in reversed(range(top_row, bottom_row+1)):      
				lst.append(inputMatrix[i][left_col])
			left_col += 1
  	
	return lst

''' 
inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

spiral_copy(inputMatrix)
'''