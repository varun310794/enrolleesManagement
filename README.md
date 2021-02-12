# enrolleesManagement

For bonus challenge: I tried to reproduce it with many scenarios while doing unit testing but couldn’t reproduce it. If you let me know the specific scenario then I can resolve the issue.

1]  Angular cli : 11.0.4 
2] Md bootstrap used for design to give it a material design effect
3] Rxjs used for reactive programming
4] Validations added for ‘name’ field that it should have minimum length 1.
5] Sorting functionality added
6] Used ‘takeuntil’ operator to avoid memory leaks (Destroyed in ngOndestroy)
7] Can add loaders for live server but here as it wasn’t necessary so didn’t add any loaders for API calls
8] Formbuilder used to keep it simple and straight forward as the given form was small.