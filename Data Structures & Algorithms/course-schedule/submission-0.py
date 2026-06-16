class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        adj = defaultdict(list)
        in_bound = defaultdict(int)
        for prerequisite, course in prerequisites:
            adj[prerequisite].append(course)
            in_bound[course] += 1
        
        courses_with_no_prerequisite = []
        for i in range(numCourses):
            if in_bound[i] == 0:
                courses_with_no_prerequisite.append(i)
        
        if not courses_with_no_prerequisite:
            return False

        queue = deque(courses_with_no_prerequisite)
        processed = set()

        while queue:
            length = len(queue)
            for _ in range(length):
                course = queue.popleft()
                processed.add(course)
                for nxtCourse in adj[course]:
                    if nxtCourse in processed:
                        continue
                    in_bound[nxtCourse] -= 1
                    if in_bound[nxtCourse] == 0:
                        queue.append(nxtCourse)

        return all(in_bound[i] == 0 for i in range(numCourses))




        

        