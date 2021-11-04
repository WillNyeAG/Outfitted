package main.src.main.java.com.example.Outfitted.Users;

public class Outfit {
	// properties of an outfit in the closet 
	private Item top;
	private Item bottom;
	private Item topLayer;
	private Item shoes;
	private Item accessory;
	
	/**
	 * Default constructor
	 */
	public Outfit() {
		this.top = new Item();
		this.bottom = new Item();
		this.topLayer = new Item();
		this.shoes = new Item();
		this.accessory = new Item();

	}
	
	/**
	 * Constructor with all outfit properties
	 */
	public Outfit(Item top, Item bottom, Item topLayer, Item shoes, Item accessory) {
		this.top = top;
		this.bottom = bottom;
		this.topLayer = topLayer;
		this.shoes = shoes;
		this.accessory = accessory;

	}
	
	// getters and setters
	public void setTop(Item top) {
		this.top = top;
	}
	public Item getTop() {
		return this.top;
	}
	
	public void setBottom(Item bottom) {
		this.bottom = bottom;
	}
	public Item getBottom() {
		return this.bottom;
	}
	
	public void setTopLayer(Item topLayer) {
		this.topLayer = topLayer;
	}
	public Item getTopLayer() {
		return this.topLayer;
	}
	
	public void setShoes(Item shoes) {
		this.shoes = shoes;
	}
	public Item getShoes() {
		return this.shoes;
	}
	
	public void setAccessory(Item accessory) {
		this.accessory = accessory;
	}
	public Item getAccessory() {
		return this.accessory;
	}
}
