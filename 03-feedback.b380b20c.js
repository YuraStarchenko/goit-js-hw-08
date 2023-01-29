const e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("submit",(function(e){e.preventDefault(),e.current.reset()})),e.textarea.addEventListener("input",(function(e){const t=e.currentTarget.value;localStorage.setItem("feedback-form-state",t)}));
//# sourceMappingURL=03-feedback.b380b20c.js.map
