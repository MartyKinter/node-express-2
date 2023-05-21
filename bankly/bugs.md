- Bug #1: authUser is not checking if the token passed in to be decoded is valid.

- Bug #2: in the get method for the user mode, error was created but not thrown

- Bug #3: doesn't await the authentication in the login route for user meaning the process might not be completed before token is created

- Bug #4: doesn't await the User.delete function in the delete route

- Bug #5: Patch route included requireAdmin middleware when it should allow current user also

- Bug #6: Get route for all users asks for basic user info but is returning all user info

- Bug #7: patch route is not checking if fields are allowed to be updated