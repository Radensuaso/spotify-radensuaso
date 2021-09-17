const fetchGet = async (url, setTheState, query) => {
  try {
    const response = await fetch(url + query, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNjA5ZmIzNTgxNzAwMTVjMjI3MGMiLCJpYXQiOjE2MjY0Mzk4MTksImV4cCI6MTYyNzY0OTQxOX0.r_G81mw3I9g934aGyIO8AZbfkWxO_W7hS9Tlz9lYZNY",
      },
    })
    if (response.ok) {
      const fetchedContent = await response.json()
      setTheState({
        data: fetchedContent.data ? fetchedContent.data : fetchedContent,
        loading: false,
        error: false,
      })
    } else {
      setTheState({
        data: [],
        loading: false,
        error: true,
      })
    }
  } catch (error) {
    setTheState({
      data: [],
      loading: false,
      error: true,
    })
  }
}

export default fetchGet
