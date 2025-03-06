import { Component } from '@angular/core';

@Component({
  selector: 'app-image-tray',
  templateUrl: './image-tray.component.html',
  styleUrls: ['./image-tray.component.css']
})
export class ImageTrayComponent {
  prices = [199, 249, 299, 349, 399, 449, 499, 549, 599];
  random_price(): number {
    return this.prices[ Math.floor(Math.random() * (this.prices.length))];
  }
  TShirts = [
    { "id": 1, "name": "Classic White Tee", "path": "./assets/TShirts/figure (1).jpg","price": this.random_price() },
    { "id": 2, "name": "Basic Black Tee", "path": "./assets/TShirts/figure (2).jpg","price": this.random_price() },
    { "id": 3, "name": "Vintage Style Tee", "path": "./assets/TShirts/figure (3).jpg","price": this.random_price() },
    { "id": 4, "name": "Graphic Print Tee", "path": "./assets/TShirts/figure (4).jpg","price": this.random_price() },
    { "id": 5, "name": "Casual Crew Neck", "path": "./assets/TShirts/figure (5).jpg","price": this.random_price() },
    { "id": 6, "name": "Comfort Fit Tee", "path": "./assets/TShirts/figure (6).jpg","price": this.random_price() },
    { "id": 7, "name": "Summer Breeze Tee", "path": "./assets/TShirts/figure (7).jpg","price": this.random_price() },
    { "id": 8, "name": "Eco-Friendly Tee", "path": "./assets/TShirts/figure (8).jpg","price": this.random_price() },
    { "id": 9, "name": "Sporty Active Tee", "path": "./assets/TShirts/figure (9).jpg","price": this.random_price() },
    { "id": 10, "name": "Urban Style Tee", "path": "./assets/TShirts/figure (10).jpg","price": this.random_price() },
    { "id": 11, "name": "Premium Cotton Tee", "path": "./assets/TShirts/figure (11).jpg","price": this.random_price() },
    { "id": 12, "name": "Designer Print Tee", "path": "./assets/TShirts/figure (12).jpg","price": this.random_price() },
    { "id": 13, "name": "Long Sleeve Tee", "path": "./assets/TShirts/figure (13).jpg","price": this.random_price() },
    { "id": 14, "name": "Short Sleeve Tee", "path": "./assets/TShirts/figure (14).jpg","price": this.random_price() },
    { "id": 15, "name": "Relaxed Fit Tee", "path": "./assets/TShirts/figure (15).jpg","price": this.random_price() },
    { "id": 16, "name": "Crew Neck Graphic Tee", "path": "./assets/TShirts/figure (16).jpg","price": this.random_price() },
    { "id": 17, "name": "Fashion Fit Tee", "path": "./assets/TShirts/figure (17).jpg","price": this.random_price() },
    { "id": 18, "name": "Bold Color Tee", "path": "./assets/TShirts/figure (18).jpg","price": this.random_price() },
    { "id": 19, "name": "Striped Pattern Tee", "path": "./assets/TShirts/figure (19).jpg","price": this.random_price() },
    { "id": 20, "name": "Essential Tee", "path": "./assets/TShirts/figure (20).jpg","price": this.random_price() },
    { "id": 21, "name": "Athletic Fit Tee", "path": "./assets/TShirts/figure (21).jpg","price": this.random_price() },
    { "id": 22, "name": "Rugged Tee", "path": "./assets/TShirts/figure (22).jpg","price": this.random_price() },
    { "id": 23, "name": "Retro Graphic Tee", "path": "./assets/TShirts/figure (23).jpg","price": this.random_price() },
    { "id": 24, "name": "Classic Striped Tee", "path": "./assets/TShirts/figure (24).jpg","price": this.random_price() },
    { "id": 25, "name": "Fitted Tee", "path": "./assets/TShirts/figure (25).jpg","price": this.random_price() },
    { "id": 26, "name": "Summer Vibes Tee", "path": "./assets/TShirts/figure (26).jpg","price": this.random_price() },
    { "id": 27, "name": "Monochrome Tee", "path": "./assets/TShirts/figure (27).jpg","price": this.random_price() },
    { "id": 28, "name": "Color Block Tee", "path": "./assets/TShirts/figure (28).jpg","price": this.random_price() },
    { "id": 29, "name": "V-Neck Style Tee", "path": "./assets/TShirts/figure (29).jpg","price": this.random_price() },
    { "id": 30, "name": "Canvas Tee", "path": "./assets/TShirts/figure (30).jpg","price": this.random_price() },
    { "id": 31, "name": "Tie-Dye Tee", "path": "./assets/TShirts/figure (31).jpg","price": this.random_price() },
    { "id": 32, "name": "Beach Day Tee", "path": "./assets/TShirts/figure (32).jpg","price": this.random_price() },
    { "id": 33, "name": "Wildlife Graphic Tee", "path": "./assets/TShirts/figure (33).jpg","price": this.random_price() },
    { "id": 34, "name": "Festival Tee", "path": "./assets/TShirts/figure (34).jpg","price": this.random_price() },
    { "id": 35, "name": "Minimalist Tee", "path": "./assets/TShirts/figure (35).jpg","price": this.random_price() },
    { "id": 36, "name": "Canvas Print Tee", "path": "./assets/TShirts/figure (36).jpg","price": this.random_price() },
    { "id": 37, "name": "Festive Tee", "path": "./assets/TShirts/figure (37).jpg","price": this.random_price() },
    { "id": 38, "name": "Camo Print Tee", "path": "./assets/TShirts/figure (38).jpg","price": this.random_price() },
    { "id": 39, "name": "Graffiti Tee", "path": "./assets/TShirts/figure (39).jpg","price": this.random_price() },
    { "id": 40, "name": "Inspiring Quote Tee", "path": "./assets/TShirts/figure (40).jpg","price": this.random_price() },
    { "id": 41, "name": "Cool Comic Tee", "path": "./assets/TShirts/figure (41).jpg","price": this.random_price() },
    { "id": 42, "name": "Stylish Checked Tee", "path": "./assets/TShirts/figure (42).jpg","price": this.random_price() },
    { "id": 43, "name": "Classic Plain Tee", "path": "./assets/TShirts/figure (43).jpg","price": this.random_price() },
    { "id": 44, "name": "Pop Culture Tee", "path": "./assets/TShirts/figure (44).jpg","price": this.random_price() },
    { "id": 45, "name": "Limited Edition Tee", "path": "./assets/TShirts/figure (45).jpg","price": this.random_price() },
    { "id": 46, "name": "Artistic Design Tee", "path": "./assets/TShirts/figure (46).jpg","price": this.random_price() },
    { "id": 47, "name": "Summer Special Tee", "path": "./assets/TShirts/figure (47).jpg","price": this.random_price() },
    { "id": 48, "name": "Adventure Tee", "path": "./assets/TShirts/figure (48).jpg","price": this.random_price() },
    { "id": 49, "name": "Cool Breeze Tee", "path": "./assets/TShirts/figure (49).jpg","price": this.random_price() },
    { "id": 50, "name": "Adventure Awaits Tee", "path": "./assets/TShirts/figure (50).jpg","price": this.random_price() },
    { "id": 51, "name": "Young & Free Tee", "path": "./assets/TShirts/figure (51).jpg","price": this.random_price() },
    { "id": 52, "name": "Love Life Tee", "path": "./assets/TShirts/figure (52).jpg","price": this.random_price() },
    { "id": 53, "name": "Stay Positive Tee", "path": "./assets/TShirts/figure (53).jpg","price": this.random_price() }
  ];
  onTshirtHover() {
    
  }
}
