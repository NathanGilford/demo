# demo
Demo for Dyode

Built with Gulp, Sass, jQuery, and Slick slider:
Scss and Js under `/app`

## Note:
Some images are not large enough for larger mobile devices such as the accessories category image and the mobile image for the promo section. In the case of the promo I default to the fullsized image to avoid pixelation but the top and bottom of the image are cut short. In the case of the accessories image there is not an alternative and image integrity is lost. Some assets were also missing (hamburger icon, cart icon, etc.) with the assumption that I was not intended to use an icon library, I found nearly identical assets and used them.

Also, for the sake of keeping the demo short I did not build resize functions into javascript.

I would typically use some sort of grid library (Bulma is my favorite) but as Bootstrap is not allowed I assumed this applied to every library that uses a grid. 

# Liquid Questions

### 1. Describe how you would make a line of text in a homepage section editable from theme customization and how you would access this in liquid.

a: In the section schema I would define a section setting for this text, and then use liquid to output it in the theme via the section object.

### 2. How would you add the collection featured image as a banner on the collection liquid template?

a: Using the collection object you can check if a featured image exists and output it with liquid via the `collection.image` attribute

### 3. Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >"

a: using liquid paginate:
```
{% paginate object.attribute by x %}
  {% for attr in object.attributes %}
    <!--show details here -->
  {% endfor %}
{% endpaginate %}
```

In this example we paginate through `object` and `attribute` showing `x` results per page. An example of this being used for `collection.products`:

```
{% paginate collection.products by 15 %}
  {% for product in collection.products %}
    <!--show details here -->
  {% endfor %}
{% endpaginate %}
```

### 4. Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.
a. 
```
{% if product.title == "Blue T-Shirt" %}
  {% assign curr_id = product.id %}
  {% assign curr_title = product.title %}
  {% assign curr_handle = product.handle %}
  {% assign curr_price = product.price %}
  {% assign curr_url = product.url %}
  {% assign curr_image = product.featured_image %}
{% endif %}
```

Note that `product.price` returns lowest price of all variants and may not be the best option depending on objective.

### 5. Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later:
  I wouldn't create a multidimensional array using liquid: typically metafields, one of the APIs, or javascript are going to be the best solution. You *can* do this with the split method, but it wouldn't be a good solution. 
