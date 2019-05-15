import org.w3c.dom.ElementCreationOptions
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement
import kotlin.browser.*

class CalculateParser {
    private var btn: HTMLButtonElement? = null
    private var change: Int = 1
    fun parse() {
        nitBtn()
        val root = document.getElementById("btn_1") as HTMLButtonElement
        val select = document.getElementById("my_select") as HTMLSelectElement
        root.addEventListener("click", {
            val el = document.getElementById("text")
            val inputOne = document.getElementById("input_one") as HTMLInputElement
            val inputTwo = document.getElementById("input_two") as HTMLInputElement
            when (change) {
                1 -> el?.textContent = CalculatePower.calculateGain(inputOne.valueAsNumber, inputTwo.valueAsNumber).toString()
                2 -> el?.textContent = CalculatePower.calculateSum(inputOne.valueAsNumber, inputTwo.valueAsNumber).toString()
            }

        })

        select.onchange = {
            println(select.value)
            setInt(select.value)
            nitBtn()
        }
    }

    private fun setInt(value: String) {
        change = value.toInt()
    }

    private fun nitBtn() {
        btn = document.createElement("button") as HTMLButtonElement
        btn?.textContent = "454846"
        btn?.style?.background = "#A1233C"
        document.body?.insertBefore(btn!!, document.getElementById("root"))
    }
}