#pragma strict

public var points : int = 5;

function OnTrigger2D(Collider2D other) 
{
    Debug.Log("Triggered! Worth " + points + " points!")

    Destroy(gameObject)
}
