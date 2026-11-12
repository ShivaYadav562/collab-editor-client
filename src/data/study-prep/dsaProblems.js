
export const dsaCategories = [
  { name: "Two Pointer Patterns", patterns: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Sliding Window Patterns", patterns: [8, 9, 10, 11] },
  { name: "Tree Traversal Patterns (DFS & BFS)", patterns: [12, 13, 14, 15, 16, 17] },
  { name: "Graph Traversal Patterns (DFS & BFS)", patterns: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29] },
  { name: "Dynamic Programming (DP) Patterns", patterns: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41] },
  { name: "Heap (Priority Queue) Patterns", patterns: [42, 43, 44, 45] },
  { name: "Backtracking Patterns", patterns: [46, 47, 48, 49, 50, 51, 52] },
  { name: "Greedy Patterns", patterns: [53, 54, 55, 56, 57, 58] },
  { name: "Binary Search Patterns", patterns: [59, 60, 61, 62, 63] },
  { name: "Stack Patterns", patterns: [64, 65, 66, 67, 68, 69] },
  { name: "Bit Manipulation Patterns", patterns: [70, 71, 72, 73] },
  { name: "Linked List Manipulation Patterns", patterns: [74, 75, 76, 77, 78] },
  { name: "Array/Matrix Manipulation Patterns", patterns: [79, 80, 81, 82, 83, 84, 85] },
  { name: "String Manipulation Patterns", patterns: [86, 87, 88, 89, 90, 91, 92] },
  { name: "Design Patterns", patterns: [93, 94] },
];

const makeProblems = (items) =>
  items.trim().split("\n").filter(Boolean).map((item) => {
    const separator = item.indexOf("|");
    return {
      id: Number(item.slice(0, separator)),
      title: item.slice(separator + 1),
    };
  });

export const dsaPatterns = [
  {
    number: 1,
    title: "Converging",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
11|Container With Most Water
15|3Sum
16|3Sum Closest
18|4Sum
167|Two Sum II - Input Array Is Sorted
349|Intersection of Two Arrays
881|Boats to Save People
977|Squares of a Sorted Array
259|3Sum Smaller
`),
  },
  {
    number: 2,
    title: "Fast & Slow",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
141|Linked List Cycle
202|Happy Number
287|Find the Duplicate Number
392|Is Subsequence
`),
  },
  {
    number: 3,
    title: "Fixed Separation",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
19|Remove Nth Node From End of List
876|Middle of the Linked List
2095|Delete the Middle Node of a Linked List
`),
  },
  {
    number: 4,
    title: "In-place Array Modification",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
26|Remove Duplicates from Sorted Array
27|Remove Element
75|Sort Colors
80|Remove Duplicates from Sorted Array II
283|Move Zeroes
443|String Compression
905|Sort Array By Parity
2337|Move Pieces to Obtain a String
2938|Separate Black and White Balls
`),
  },
  {
    number: 5,
    title: "String Comparison with Special Characters",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
844|Backspace String Compare
1598|Crawler Log Folder
2390|Removing Stars From a String
`),
  },
  {
    number: 6,
    title: "Expanding From Center",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
5|Longest Palindromic Substring
647|Palindromic Substrings
`),
  },
  {
    number: 7,
    title: "String Reversal",
    category: "Two Pointer Patterns",
    problems: makeProblems(`
151|Reverse Words in a String
344|Reverse String
345|Reverse Vowels of a String
541|Reverse String II
`),
  },
  {
    number: 8,
    title: "Fixed Size",
    category: "Sliding Window Patterns",
    problems: makeProblems(`
346|Moving Average from Data Stream
643|Maximum Average Subarray I
2985|Calculate Compressed Mean
3254|Find the Power of K-Size Subarrays I
3318|Find X-Sum of All K-Long Subarrays I
`),
  },
  {
    number: 9,
    title: "Variable Size",
    category: "Sliding Window Patterns",
    problems: makeProblems(`
3|Longest Substring Without Repeating Characters
76|Minimum Window Substring
209|Minimum Size Subarray Sum
219|Contains Duplicate II
424|Longest Repeating Character Replacement
713|Subarray Product Less Than K
904|Fruit Into Baskets
1004|Max Consecutive Ones III
1438|Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
1493|Longest Subarray of 1's After Deleting One Element
`),
  },
  {
    number: 10,
    title: "Monotonic Queue for Max/Min",
    category: "Sliding Window Patterns",
    problems: makeProblems(`
239|Sliding Window Maximum
862|Shortest Subarray with Sum at Least K
1696|Jump Game VI
`),
  },
  {
    number: 11,
    title: "Character Frequency Matching",
    category: "Sliding Window Patterns",
    problems: makeProblems(`
1|Two Sum
438|Find All Anagrams in a String
567|Permutation in String
`),
  },
  {
    number: 12,
    title: "Level Order Traversal",
    category: "Tree Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
102|Binary Tree Level Order Traversal
103|Binary Tree Zigzag Level Order Traversal
199|Binary Tree Right Side View
515|Find Largest Value in Each Tree Row
1161|Maximum Level Sum of a Binary Tree
`),
  },
  {
    number: 13,
    title: "Recursive Preorder Traversal",
    category: "Tree Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
100|Same Tree
101|Symmetric Tree
105|Construct Binary Tree from Preorder and Inorder Traversal
114|Flatten Binary Tree to Linked List
226|Invert Binary Tree
257|Binary Tree Paths
988|Smallest String Starting From Leaf
`),
  },
  {
    number: 14,
    title: "Recursive Inorder Traversal",
    category: "Tree Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
94|Binary Tree Inorder Traversal
98|Validate Binary Search Tree
173|Binary Search Tree Iterator
230|Kth Smallest Element in a BST
501|Find Mode in Binary Search Tree
530|Minimum Absolute Difference in BST
`),
  },
  {
    number: 15,
    title: "Recursive Postorder Traversal",
    category: "Tree Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
104|Maximum Depth of Binary Tree
110|Balanced Binary Tree
124|Binary Tree Maximum Path Sum
145|Binary Tree Postorder Traversal
337|House Robber III
366|Find Leaves of Binary Tree
543|Diameter of Binary Tree
863|All Nodes Distance K in Binary Tree
1110|Delete Nodes And Return Forest
2458|Height of Binary Tree After Subtree Removal Queries
`),
  },
  {
    number: 16,
    title: "Lowest Common Ancestor",
    category: "Tree Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
235|Lowest Common Ancestor of a Binary Search Tree
236|Lowest Common Ancestor of a Binary Tree
`),
  },
  {
    number: 17,
    title: "Serialization and Deserialization",
    category: "Tree Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
297|Serialize and Deserialize Binary Tree
572|Subtree of Another Tree
652|Find Duplicate Subtrees
`),
  },
  {
    number: 18,
    title: "DFS - Connected Components / Island Counting",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
130|Surrounded Regions
200|Number of Islands
417|Pacific Atlantic Water Flow
547|Number of Provinces
695|Max Area of Island
733|Flood Fill
841|Keys and Rooms
1020|Number of Enclaves
1254|Number of Closed Islands
1905|Count Sub Islands
2101|Detonate the Maximum Bombs
`),
  },
  {
    number: 19,
    title: "BFS - Connected Components / Island Counting",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
542|01 Matrix
994|Rotting Oranges
1091|Shortest Path in Binary Matrix
`),
  },
  {
    number: 20,
    title: "DFS - Cycle Detection",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
207|Course Schedule
210|Course Schedule II
802|Find Eventual Safe States
1059|All Paths from Source Lead to Destination
`),
  },
  {
    number: 21,
    title: "BFS - Topological Sort (Kahn's Algorithm)",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
210|Course Schedule II
269|Alien Dictionary
310|Minimum Height Trees
444|Sequence Reconstruction
1136|Parallel Courses
1857|Largest Color Value in a Directed Graph
2050|Parallel Courses III
2115|Find All Possible Recipes from Given Supplies
2392|Build a Matrix With Conditions
`),
  },
  {
    number: 22,
    title: "Deep Copy / Cloning",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
133|Clone Graph
1334|Find the City With the Smallest Number of Neighbors at a Threshold Distance
138|Copy List with Random Pointer
1490|Clone N-ary Tree
`),
  },
  {
    number: 23,
    title: "Shortest Path",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
743|Network Delay Time
778|Swim in Rising Water
1514|Path with Maximum Probability
1631|Path With Minimum Effort
1976|Number of Ways to Arrive at Destination
2045|Second Minimum Time to Reach Destination
2203|Minimum Weighted Subgraph With the Required Paths
2290|Minimum Obstacle Removal to Reach Corner
2577|Minimum Time to Visit a Cell In a Grid
2812|Find the Safest Path in a Grid
`),
  },
  {
    number: 24,
    title: "Shortest Path (Bellman-Ford / BFS+K)",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
787|Cheapest Flights Within K Stops
1129|Shortest Path with Alternating Colors
`),
  },
  {
    number: 25,
    title: "Union-Find",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
200|Number of Islands
261|Graph Valid Tree
305|Number of Islands II
323|Number of Connected Components in an Undirected Graph
547|Number of Provinces
684|Redundant Connection
721|Accounts Merge
737|Sentence Similarity II
947|Most Stones Removed with Same Row or Column
952|Largest Component Size by Common Factor
959|Regions Cut By Slashes
1101|The Earliest Moment When Everyone Become Friends
`),
  },
  {
    number: 26,
    title: "Strongly Connected Components (Kosaraju / Tarjan)",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
210|Course Schedule II
547|Number of Provinces
1192|Critical Connections in a Network
2127|Maximum Employees to Be Invited to a Meeting
`),
  },
  {
    number: 27,
    title: "Bridges & Articulation Points (Tarjan low-link)",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
1192|Critical Connections in a Network
2360|Longest Cycle in a Graph
`),
  },
  {
    number: 28,
    title: "Minimum Spanning Tree (Kruskal / Prim / DSU + heap)",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
1135|Connecting Cities With Minimum Cost
1584|Min Cost to Connect All Points
1168|Optimize Water Distribution in a Village
1489|Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree
`),
  },
  {
    number: 29,
    title: "Bidirectional BFS",
    category: "Graph Traversal Patterns (DFS & BFS)",
    problems: makeProblems(`
127|Word Ladder
126|Word Ladder II
815|Bus Routes
`),
  },
  {
    number: 30,
    title: "Fibonacci Style",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
70|Climbing Stairs
91|Decode Ways
198|House Robber
213|House Robber II
337|House Robber III
509|Fibonacci Number
740|Delete and Earn
746|Min Cost Climbing Stairs
`),
  },
  {
    number: 31,
    title: "Kadane's Algorithm for Max/Min Subarray",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
53|Maximum Subarray
918|Maximum Sum Circular Subarray
2321|Maximum Score Of Spliced Array
1749|Maximum Absolute Sum of Any Subarray
152|Maximum Product Subarray
`),
  },
  {
    number: 32,
    title: "Coin Change / Unbounded Knapsack Style",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
322|Coin Change
377|Combination Sum IV
518|Coin Change II
`),
  },
  {
    number: 33,
    title: "0/1 Knapsack, Subset Sum Style",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
416|Partition Equal Subset Sum
494|Target Sum
`),
  },
    {
    number: 34,
    title: "Word Break Style",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
139|Word Break
140|Word Break II
`),
  },
  {
    number: 35,
    title: "Longest Common Subsequence - LCS",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
1143|Longest Common Subsequence
1092|Shortest Common Supersequence
1312|Minimum Insertion Steps to Make a String Palindrome
`),
  },
  {
    number: 36,
    title: "Edit Distance / Levenshtein Distance",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
72|Edit Distance
583|Delete Operation for Two Strings
712|Minimum ASCII Delete Sum for Two Strings
`),
  },
  {
    number: 37,
    title: "Unique Paths on Grid",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
62|Unique Paths
63|Unique Paths II
64|Minimum Path Sum
120|Triangle
221|Maximal Square
931|Minimum Falling Path Sum
1277|Count Square Submatrices with All Ones
`),
  },
  {
    number: 38,
    title: "Interval DP",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
312|Burst Balloons
546|Remove Boxes
`),
  },
  {
    number: 39,
    title: "Catalan Numbers",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
95|Unique Binary Search Trees II
96|Unique Binary Search Trees
241|Different Ways to Add Parentheses
`),
  },
  {
    number: 40,
    title: "Longest Increasing Subsequence",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
300|Longest Increasing Subsequence
354|Russian Doll Envelopes
1671|Minimum Number of Removals to Make Mountain Array
2407|Longest Increasing Subsequence II
`),
  },
  {
    number: 41,
    title: "Stock Problems",
    category: "Dynamic Programming (DP) Patterns",
    problems: makeProblems(`
121|Best Time to Buy and Sell Stock
122|Best Time to Buy and Sell Stock II
123|Best Time to Buy and Sell Stock III
188|Best Time to Buy and Sell Stock IV
309|Best Time to Buy and Sell Stock with Cooldown
`),
  },
  {
    number: 42,
    title: "Top K Elements",
    category: "Heap (Priority Queue) Patterns",
    problems: makeProblems(`
215|Kth Largest Element in an Array
347|Top K Frequent Elements
451|Sort Characters By Frequency
506|Relative Ranks
703|Kth Largest Element in a Stream
973|K Closest Points to Origin
1046|Last Stone Weight
2558|Take Gifts From the Richest Pile
`),
  },
  {
    number: 43,
    title: "Two Heaps for Median Finding",
    category: "Heap (Priority Queue) Patterns",
    problems: makeProblems(`
295|Find Median from Data Stream
1825|Finding MK Average
`),
  },
  {
    number: 44,
    title: "K-way Merge",
    category: "Heap (Priority Queue) Patterns",
    problems: makeProblems(`
23|Merge k Sorted Lists
373|Find K Pairs with Smallest Sums
378|Kth Smallest Element in a Sorted Matrix
632|Smallest Range Covering Elements from K Lists
`),
  },
  {
    number: 45,
    title: "Scheduling / Minimum Cost",
    category: "Heap (Priority Queue) Patterns",
    problems: makeProblems(`
253|Meeting Rooms II
767|Reorganize String
857|Minimum Cost to Hire K Workers
1642|Furthest Building You Can Reach
1792|Maximum Average Pass Ratio
1834|Single-Threaded CPU
1942|The Number of the Smallest Unoccupied Chair
2402|Meeting Rooms III
`),
  },
  {
    number: 46,
    title: "Subsets (Include/Exclude)",
    category: "Backtracking Patterns",
    problems: makeProblems(`
17|Letter Combinations of a Phone Number
77|Combinations
78|Subsets
90|Subsets II
`),
  },
  {
    number: 47,
    title: "Permutations",
    category: "Backtracking Patterns",
    problems: makeProblems(`
31|Next Permutation
46|Permutations
60|Permutation Sequence
`),
  },
  {
    number: 48,
    title: "Combination Sum",
    category: "Backtracking Patterns",
    problems: makeProblems(`
39|Combination Sum
40|Combination Sum II
`),
  },
  {
    number: 49,
    title: "Parentheses Generation",
    category: "Backtracking Patterns",
    problems: makeProblems(`
22|Generate Parentheses
301|Remove Invalid Parentheses
`),
  },
  {
    number: 50,
    title: "Word Search / Path Finding in Grid",
    category: "Backtracking Patterns",
    problems: makeProblems(`
79|Word Search
212|Word Search II
2018|Check if Word Can Be Placed In Crossword
`),
  },
  {
    number: 51,
    title: "N-Queens / Constraint Satisfaction",
    category: "Backtracking Patterns",
    problems: makeProblems(`
37|Sudoku Solver
51|N-Queens
`),
  },
  {
    number: 52,
    title: "Palindrome Partitioning",
    category: "Backtracking Patterns",
    problems: makeProblems(`
131|Palindrome Partitioning
132|Palindrome Partitioning II
1457|Pseudo-Palindromic Paths in a Binary Tree
`),
  },
  {
    number: 53,
    title: "Interval Merging / Scheduling",
    category: "Greedy Patterns",
    problems: makeProblems(`
56|Merge Intervals
57|Insert Interval
759|Employee Free Time
986|Interval List Intersections
2406|Divide Intervals Into Minimum Number of Groups
`),
  },
  {
    number: 54,
    title: "Jump Game Reachability / Minimization",
    category: "Greedy Patterns",
    problems: makeProblems(`
45|Jump Game II
55|Jump Game
`),
  },
  {
    number: 55,
    title: "Buy/Sell Stock",
    category: "Greedy Patterns",
    problems: makeProblems(`
121|Best Time to Buy and Sell Stock
122|Best Time to Buy and Sell Stock II
`),
  },
  {
    number: 56,
    title: "Gas Station Circuit",
    category: "Greedy Patterns",
    problems: makeProblems(`
134|Gas Station
2202|Maximize the Topmost Element After K Moves
`),
  },
  {
    number: 57,
    title: "Task Scheduling",
    category: "Greedy Patterns",
    problems: makeProblems(`
621|Task Scheduler
767|Reorganize String
1054|Distant Barcodes
`),
  },
  {
    number: 58,
    title: "Sorting Based",
    category: "Greedy Patterns",
    problems: makeProblems(`
455|Assign Cookies
135|Candy
406|Queue Reconstruction by Height
1029|Two City Scheduling
`),
  },
  {
    number: 59,
    title: "On Sorted Array/List",
    category: "Binary Search Patterns",
    problems: makeProblems(`
35|Search Insert Position
69|Sqrt(x)
74|Search a 2D Matrix
278|First Bad Version
374|Guess Number Higher or Lower
540|Single Element in a Sorted Array
704|Binary Search
1539|Kth Missing Positive Number
`),
  },
  {
    number: 60,
    title: "Find Min/Max in Rotated Sorted Array",
    category: "Binary Search Patterns",
    problems: makeProblems(`
33|Search in Rotated Sorted Array
81|Search in Rotated Sorted Array II
153|Find Minimum in Rotated Sorted Array
162|Find Peak Element
852|Peak Index in a Mountain Array
1095|Find in Mountain Array
`),
  },
  {
    number: 61,
    title: "On Answer / Condition Function",
    category: "Binary Search Patterns",
    problems: makeProblems(`
410|Split Array Largest Sum
774|Minimize Max Distance to Gas Station
875|Koko Eating Bananas
1011|Capacity To Ship Packages Within D Days
1482|Minimum Number of Days to Make m Bouquets
1760|Minimum Limit of Balls in a Bag
2064|Minimized Maximum of Products Distributed to Any Store
2226|Maximum Candies Allocated to K Children
`),
  },
  {
    number: 62,
    title: "Find First/Last Occurrence",
    category: "Binary Search Patterns",
    problems: makeProblems(`
34|Find First and Last Position of Element in Sorted Array
658|Find K Closest Elements
`),
  },
  {
    number: 63,
    title: "Median / Kth across Two Sorted Arrays",
    category: "Binary Search Patterns",
    problems: makeProblems(`
4|Median of Two Sorted Arrays
719|Find K-th Smallest Pair Distance
378|Kth Smallest Element in a Sorted Matrix
`),
  },
  {
    number: 64,
    title: "Valid Parentheses Matching",
    category: "Stack Patterns",
    problems: makeProblems(`
20|Valid Parentheses
32|Longest Valid Parentheses
921|Minimum Add to Make Parentheses Valid
1249|Minimum Remove to Make Valid Parentheses
1963|Minimum Number of Swaps to Make the String Balanced
`),
  },
  {
    number: 65,
    title: "Monotonic Stack",
    category: "Stack Patterns",
    problems: makeProblems(`
402|Remove K Digits
496|Next Greater Element I
503|Next Greater Element II
739|Daily Temperatures
901|Online Stock Span
907|Sum of Subarray Minimums
962|Maximum Width Ramp
1475|Final Prices With a Special Discount in a Shop
1673|Find the Most Competitive Subsequence
`),
  },

    {
    number: 66,
    title: "Expression Evaluation",
    category: "Stack Patterns",
    problems: makeProblems(`
150|Evaluate Reverse Polish Notation
224|Basic Calculator
227|Basic Calculator II
772|Basic Calculator III
`),
  },
  {
    number: 67,
    title: "Simulation / Backtracking Helper",
    category: "Stack Patterns",
    problems: makeProblems(`
71|Simplify Path
394|Decode String
735|Asteroid Collision
`),
  },
  {
    number: 68,
    title: "Min Stack Design",
    category: "Stack Patterns",
    problems: makeProblems(`
155|Min Stack
895|Maximum Frequency Stack
901|Online Stock Span
`),
  },
  {
    number: 69,
    title: "Largest Rectangle in Histogram",
    category: "Stack Patterns",
    problems: makeProblems(`
84|Largest Rectangle in Histogram
85|Maximal Rectangle
`),
  },
  {
    number: 70,
    title: "Bitwise XOR - Finding Single/Missing Number",
    category: "Bit Manipulation Patterns",
    problems: makeProblems(`
136|Single Number
137|Single Number II
268|Missing Number
389|Find the Difference
`),
  },
  {
    number: 71,
    title: "Bitwise AND - Counting Set Bits (Hamming Weight)",
    category: "Bit Manipulation Patterns",
    problems: makeProblems(`
191|Number of 1 Bits
231|Power of Two
477|Total Hamming Distance
`),
  },
  {
    number: 72,
    title: "Bitwise DP - Counting Bits Optimization",
    category: "Bit Manipulation Patterns",
    problems: makeProblems(`
338|Counting Bits
1494|Parallel Courses II
1442|Count Triplets That Can Form Two Arrays of Equal XOR
`),
  },
  {
    number: 73,
    title: "Bitwise Operations - Power of Two/Four Check",
    category: "Bit Manipulation Patterns",
    problems: makeProblems(`
231|Power of Two
342|Power of Four
`),
  },
  {
    number: 74,
    title: "In-place Reversal",
    category: "Linked List Manipulation Patterns",
    problems: makeProblems(`
83|Remove Duplicates from Sorted List
92|Reverse Linked List II
206|Reverse Linked List
25|Reverse Nodes in k-Group
234|Palindrome Linked List
82|Remove Duplicates from Sorted List II
`),
  },
  {
    number: 75,
    title: "Merging Two Sorted Lists",
    category: "Linked List Manipulation Patterns",
    problems: makeProblems(`
21|Merge Two Sorted Lists
23|Merge k Sorted Lists
`),
  },
  {
    number: 76,
    title: "Addition of Numbers",
    category: "Linked List Manipulation Patterns",
    problems: makeProblems(`
2|Add Two Numbers
369|Plus One Linked List
`),
  },
  {
    number: 77,
    title: "Intersection Detection",
    category: "Linked List Manipulation Patterns",
    problems: makeProblems(`
160|Intersection of Two Linked Lists
599|Minimum Index Sum of Two Lists
`),
  },
  {
    number: 78,
    title: "Reordering / Partitioning",
    category: "Linked List Manipulation Patterns",
    problems: makeProblems(`
24|Swap Nodes in Pairs
61|Rotate List
86|Partition List
143|Reorder List
328|Odd Even Linked List
`),
  },
  {
    number: 79,
    title: "In-place Rotation",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
48|Rotate Image
189|Rotate Array
867|Transpose Matrix
`),
  },
  {
    number: 80,
    title: "Spiral Traversal",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
54|Spiral Matrix
59|Spiral Matrix II
885|Spiral Matrix III
2326|Spiral Matrix IV
`),
  },
  {
    number: 81,
    title: "In-place Marking",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
73|Set Matrix Zeroes
289|Game of Life
498|Diagonal Traverse
`),
  },
  {
    number: 82,
    title: "Prefix/Suffix Products",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
238|Product of Array Except Self
845|Longest Mountain in Array
2483|Minimum Penalty for a Shop
`),
  },
  {
    number: 83,
    title: "Plus One",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
66|Plus One
43|Multiply Strings
989|Add to Array-Form of Integer
67|Add Binary
`),
  },
  {
    number: 84,
    title: "In-place from End",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
88|Merge Sorted Array
977|Squares of a Sorted Array
`),
  },
  {
    number: 85,
    title: "Cyclic Sort",
    category: "Array/Matrix Manipulation Patterns",
    problems: makeProblems(`
41|First Missing Positive
268|Missing Number
287|Find the Duplicate Number
442|Find All Duplicates in an Array
448|Find All Numbers Disappeared in an Array
`),
  },
  {
    number: 86,
    title: "Palindrome Check",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
9|Palindrome Number
125|Valid Palindrome
680|Valid Palindrome II
`),
  },
  {
    number: 87,
    title: "Anagram Check",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
49|Group Anagrams
242|Valid Anagram
`),
  },
  {
    number: 88,
    title: "Roman to Integer Conversion",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
13|Roman to Integer
12|Integer to Roman
`),
  },
  {
    number: 89,
    title: "String to Integer (atoi)",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
8|String to Integer (atoi)
65|Valid Number
`),
  },
  {
    number: 90,
    title: "Manual Simulation",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
43|Multiply Strings
415|Add Strings
67|Add Binary
`),
  },
  {
    number: 91,
    title: "String Matching - Naive / KMP / Rabin-Karp",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
28|Find the Index of the First Occurrence in a String
214|Shortest Palindrome
686|Repeated String Match
796|Rotate String
3008|Find Beautiful Indices in the Given Array II
`),
  },
  {
    number: 92,
    title: "Repeated Substring Pattern Detection",
    category: "String Manipulation Patterns",
    problems: makeProblems(`
459|Repeated Substring Pattern
28|Find the Index of the First Occurrence in a String
686|Repeated String Match
`),
  },
  {
    number: 93,
    title: "Design (General/Specific)",
    category: "Design Patterns",
    problems: makeProblems(`
146|LRU Cache
155|Min Stack
225|Implement Stack using Queues
232|Implement Queue using Stacks
251|Flatten 2D Vector
271|Encode and Decode Strings
295|Find Median from Data Stream
341|Flatten Nested List Iterator
346|Moving Average from Data Stream
353|Design Snake Game
359|Logger Rate Limiter
362|Design Hit Counter
379|Design Phone Directory
380|Insert Delete GetRandom O(1)
432|All O\`one Data Structure 
`),
  },
    
  {
    number: 94,
    title: "Tries",
    category: "Design Patterns",
    problems: makeProblems(`
208|Implement Trie (Prefix Tree)
211|Design Add and Search Words Data Structure
720|Longest Word in Dictionary
648|Replace Words
425|Word Squares
642|Design Search Autocomplete System
745|Prefix and Suffix Search
`),
  },
];
    
   