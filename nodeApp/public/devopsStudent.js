const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value;
  const age = form.age.value;

  try {
    const result = await fetch("/student", {
      method: "POST",
      body: JSON.stringify({ name, age }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await result.json();

    if (data) {
      location.assign("/student");
    }
  } catch (err) {
    console.log(err);
  }
});
