// Search//

<form action="/search">
  <input type="text" name="query" placeholder="Search a product">
  <button type="submit">Go</button>
</form>

<% if (elementos.length > 0) { %>
  <ul>
    <% for (let elemento of elementos) { %>
      <li><%= elemento.title %></li>
    <% } %>
  </ul>
<% } else { %>
  <p>The product you're looking for doesn't exist</p>
<% } %>