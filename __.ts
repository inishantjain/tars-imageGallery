const my = {
  urls: {
    raw: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?ixid=M3w1MTkzOTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODA3ODg3MXw&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTkzOTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODA3ODg3MXw&ixlib=rb-4.0.3&q=85",
    regular:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTkzOTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODA3ODg3MXw&ixlib=rb-4.0.3&q=80&w=1080",
    small:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTkzOTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODA3ODg3MXw&ixlib=rb-4.0.3&q=80&w=400",
    thumb:
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTkzOTF8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODA3ODg3MXw&ixlib=rb-4.0.3&q=80&w=200",
  },
};

const site =
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8";

const rcset =
  "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 100w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 200w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 300w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 400w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 500w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 600w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 700w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 800w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 900w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 1000w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=1200&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 1200w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=1400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 1400w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=1600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 1600w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=1800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 1800w, https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=60&w=2000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8 2000w";