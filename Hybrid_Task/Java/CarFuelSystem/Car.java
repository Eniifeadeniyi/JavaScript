public class Car {
	private boolean start;
	private double fuelLevel;
	private double fuelEfficiency;
	private double distance;
	private double maximumDistance;

public Car(double fuelEfficiency) {
	if(fuelEfficiency > 0) {
	this.fuelEfficiency = fuelEfficiency;
	this.maximumDistance = fuelEfficiency * 50;}
}


public void startCar() {
	this.start = true;
}

public boolean getStartCar() {
	return start;
}

public void stopCar() {
	this.start = false;
}


public void addToFuel(double fuel) {
	if(this.fuelLevel < 50.1) {
		if(fuel > 0 && fuel < 50.1) this.fuelLevel += fuel;}
}

public double getCurrentFuelLevel() {
	return fuelLevel;
}

public void moveCar(double distance) {
	if(distance > 0 && distance <= maximumDistance) {
		this.distance += distance;
		double fuelUsed = distance / this.fuelEfficiency;
		this.fuelLevel -= fuelUsed;}
}

public double getDistance() {
	return distance;
}

}
